pipeline{
    agent any
    environment{
        VITE_API_URL = credentials('reactappurl')
    }
    stages{
        stage ('scm'){
            steps{
                sh '''
                pwd
                echo $VITE_API_URL >> .env
                cat .env
                '''
            }
        }
    }
}
