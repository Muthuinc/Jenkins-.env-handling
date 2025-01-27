pipeline{
    agent any
    environment{
        VITE_API_URL = credentials('reactappurl')
    }
    stages{
        stage ('scm'){
            steps{
                dir('frontend'){
                    sh '''
                    echo "VITE_API_URL=${VITE_API_URL}" > .env
                    npm install && npm run build
                    '''
                }
            }
        }
        stage ('backend'){
            steps{
                withCredentials([file(credentialsId: 'backend', variable: 'ENV_FILE')]){
                    dir('backend'){
                        sh '''
                        cp ${ENV_FILE} .env
                        npm install 
                        pm2 start app.js --name temp
                        '''
                    }
                }
            }  
        }
    }
}
