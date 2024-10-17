pipeline {
    agent any
    stages {
        stage('Master Branch Build Code') {
            when {
                branch 'main' 
            }
            steps {
                sh '''
                    echo "Build App"
                    npm i
                    echo "Prod Successfully Builded app"
                '''
            }
        }
 

        stage('Master Branch Deploy Code') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    rsync -zvhr -e ssh . ubuntu@52.204.46.77:/home/ubuntu/node-app-prod-server/
                    echo "prod Sucessfully Deployed App"
                    ssh ubuntu@52.204.46.77 'pm2 start prod'
                '''
            }
        }
        stage('QA Branch Build Code') {
            when {
                branch 'qa'
            }
            steps {
                sh '''
                    echo "Build App"
                    npm i
                    echo "QA Successfully Builded app"
                '''
            }
        }


        stage('QA Branch Deploy Code') {
            when {
                branch 'qa'
            }
            steps {
                sh '''
                    rsync -zvhr -e ssh . ubuntu@52.204.46.77:/home/ubuntu/node-app-QA-server/
                    echo "QA Sucessfully Deployed App"
                    ssh ubuntu@52.204.46.77 'pm2 start QA'
                '''
            }
        }

        stage('developer Branch Build Code') {
            when {
                branch 'developer'
            }
            steps {
                sh '''
                    echo "Build App"
                    npm i
                    echo "developer Successfully Builded app"
                '''
            }
        }


        stage('developer Branch Deploy Code') {
            when {
                branch 'developer'
            }
            steps {
                sh '''
                    rsync -zvhr -e ssh . ubuntu@52.204.46.77:/home/ubuntu/node-app-developer-server/
                    echo "developer Sucessfully Deployed App"
                    ssh ubuntu@52.204.46.77 'pm2 start dev'
                '''
            }
        }

    }
}
              
