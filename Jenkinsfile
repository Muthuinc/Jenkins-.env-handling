pipeline{
    agent any
    environment{
        VITE_API_URL = credentials('reactappurl')
    }
    stages{
        stage ('scm'){
            steps{
                sh '''
                cd frontend
                echo $VITE_API_URL >> .env
                npm install && npm run build
                '''
            }
        }
        stage ('backend'){
            steps{
                dir('backend'){
                    sh'npm install'
                }
            }  
        }
    }
}
