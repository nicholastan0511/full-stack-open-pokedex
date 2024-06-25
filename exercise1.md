# Exercise 11.1: Warming Up

## Language of Choice: Python

## Question 1: What are the specific tools for taking care of these steps in the ecosystem of the language you picked?

For the linting part, I will use Pylint, which not only checks for coding style but also helps identiy programming errors and enforces coding standards.

In terms of building, I will use Setuptools, which includes a bundle of tools for compiling, packaging, and distributing Python projects.

For testing, I will use Pytest, which is a robust testing framework that supports fixtures, parameterized testing, and can run unittest and doctest tests.

## Question 2: What alternatives are there to set up the CI besides Jenkins and GitHub Actions? 
GitLab CI/CD is a powerful and comprehensive continuous integration and continuous deployment (CI/CD) system that is integrated into GitLab, a web-based DevOps lifecycle tool. It allows you to build, test, and deploy your code using pipelines, which can be defined as code in a simple YAML configuration file.

## Question 3: Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
If we are talking about a small team of 6 people, then a cloud-based environment might be more prefarable since it is relatively more cost-effective for small-scale projects and is simpler in terms of initial setup. However, using a cloud-based environment might compormise the security aspect of the application since the data is put on cloud. Moreover, cloud-based environment offers limited customization compared to self-hosted environment like Jenkins. On the other hand, however, since we are working on a project with a small team, capital becomes an issue and therefore, pricing becomes the most important element to consider, which in this case, cloud-based environment prevails!

