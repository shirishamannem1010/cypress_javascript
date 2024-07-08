pipeline {
    agent any
    stages {
        stage('Clone Git Repo'){
                steps{
                  git branch: 'main', credentialsId:"shirisha_mannem_1010", url:'https://github.com/shirishamannem1010/cypress_javascript.git'
            }
        }
        stage('Install Dependencies'){
                steps{
                    bat 'npm install --force'
                }
        }
        stage('Run Tests'){
                steps{
                    
                 script {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npm run cypress_test'
                    }
                    }
                    
                }
        }
        stage('Publish HTML Report'){
                steps{
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
                }
        }
    }

}