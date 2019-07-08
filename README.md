RolePlaying App
===============

Welcome to this roleplaying app. This app is purely designed for infrastructure testing however there are plans to update it in the future.

To run the app locally execute the following command in your terminal:
```bash
docker-compose build app && docker-compose up app
```
If you wish to examine the app on minikube there is a helm option.
Firstly you will need to get the helm dependencies and then you can install via.
```bash
helm install --name <release-name> ci/helm/roleplaying
```

