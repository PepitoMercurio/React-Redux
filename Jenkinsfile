pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t monimage .'
            }
        }

        stage('Test') {
            steps {
                // tests
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}