pipeline{
    agent any
    stages{
        stage ('scm'){
            sh '''
            pwd
            cd frontend && npm install
            '''
        }
    }
}