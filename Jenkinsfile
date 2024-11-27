pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/AmieMalik06/SimpleWebApp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simple-web-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 8080:8080 simple-web-app'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                script {
                    sh 'python3 -m pip install --upgrade pip'
                    sh 'pip3 install selenium'
                    sh 'python3 tests/test_selenium.py'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed!'
        }
    }
}
