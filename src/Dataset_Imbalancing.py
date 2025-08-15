import pandas as pd
import numpy as np


def generate_imbalanced_brainTumor_dataset(X_train, y_train, minority_ratio):

    length = len(X_train)
    actual_length_majority, actual_length_minority = y_train.value_counts()

    length_minority = round((minority_ratio/(1-minority_ratio)) * actual_length_majority)
    length_majority = actual_length_majority

    while(length_minority > actual_length_minority):
        length_majority -= 1
        length_minority = round((minority_ratio/(1-minority_ratio)) * length_majority)

    df = pd.DataFrame(X_train)
    df["label"] = y_train

    non_tumor_samples = df.loc[df["label"] == np.int64(0)].sample(length_majority, replace = False, random_state = 42).reset_index(drop=True)
    tumor_samples = df.loc[df["label"] == np.int64(1)].sample(length_minority, replace = False, random_state = 42).reset_index(drop=True)

    sampled_df  = pd.concat([non_tumor_samples, tumor_samples]).sample(frac=1).reset_index(drop=True)

    return sampled_df.iloc[:, :-1], sampled_df["label"]
    