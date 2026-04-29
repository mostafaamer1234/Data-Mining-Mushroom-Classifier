# Mushroom Classifier

## Abstract
The Mushroom Classifier is a full-stack web application designed to help users determine whether a mushroom is safe to eat or poisonous. Built with a Python backend and a React frontend, the application leverages data mining techniques, specifically the Random Forest and Decision Tree algorithms, to deliver accurate, reliable mushroom classifications.  

The dataset powering the classifier is sourced from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Mushroom) and contains over 8,000 instances described by 22 categorical features, including cap shape, cap surface, odor, gill size, stalk shape, and spore print color. These features serve as the foundation for applying supervised learning, where the goal is to predict whether a given mushroom is edible or poisonous based on its physical characteristics.  

A REST API connects the Python backend to the React frontend, enabling the application to display classified mushroom data across dedicated edible and poisonous pages. Accurate mushroom identification is a critical real-world problem, as misidentification can lead to severe health consequences, making precise and dependable classification essential.  

## Introduction
The Mushroom Classifier application classifies mushrooms as either edible and safe for consumption or poisonous and dangerous. The full-stack application uses:

- **Backend:** Python  
- **Frontend:** React  

It leverages Data Mining algorithms such as **Random Forest** and **Decision Trees** to achieve the most accurate results for users. An API connects the backend to the frontend, enabling the application to display poisonous and edible mushrooms on dedicated pages.  

This project frames mushroom classification as a **supervised learning problem**, using categorical attributes describing physical characteristics to predict whether a mushroom is edible or poisonous. The Mushroom dataset from the UCI Machine Learning Repository provides over 8,000 instances and 22 categorical features such as odor, gill size, stalk shape, and spore print color, which form the basis for applying classification-based data mining techniques.  

## Problem Statement
It can be difficult for non-experts to distinguish between edible and poisonous mushrooms. Eating the wrong type can result in serious health consequences. While trained specialists may know how to identify mushrooms, many people do not.  

**Mushroom Classifier** solves this problem by using machine learning to predict whether a mushroom is edible or poisonous based on its physical features. By using data mining algorithms, the application provides a simple, reliable, and safe decision-support tool for users.  

## Goal & Objectives
The goal of the Mushroom Classifier is to develop a **reliable and user-friendly machine learning application** that accurately predicts whether a mushroom is edible or poisonous. Key objectives include:

- Implementing **Decision Tree** and **Random Forest** algorithms for classification.
- Providing a **safe and accessible tool** for individuals without expert knowledge of mushrooms.
- Connecting a **Python backend** with a **React frontend** through a REST API to display results in an intuitive interface.

## Dataset
- **Source:** [UCI Machine Learning Repository – Mushroom Dataset](https://archive.ics.uci.edu/ml/datasets/Mushroom)  
- **Size:** 8,124 instances  
- **Features:** 22 categorical features such as cap-shape, cap-surface, odor, gill-size, stalk-shape, and spore-print-color  
- **Task:** Classify mushrooms as edible or poisonous based on their physical characteristics

## Team Members & Contributions
| Name | Contribution |
|------|--------------|
| **Wilson Quilli** | Frontend with React and wrote the final report |
| **Mostafa Amer** | Built & trained Computer vision model and machine learning models. Backend with Python |
| **Mohamed Abdalla** | Integrated backend and frontend; created the final presentation |

## Technologies Used
- Python (backend)
- React (frontend)
- REST API
- Random Forest & Decision Tree Algorithms
- UCI Mushroom Dataset
