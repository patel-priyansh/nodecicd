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
                    rsync -zvhr -e ssh . ubuntu@54.167.33.111:/home/ubuntu/node-app-prod-server/
                    echo "prod Sucessfully Deployed App"
                '''
            }
        }

        stage('Stage Branch Build Code') {
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


        stage('Stage Branch Deploy Code') {
            when {
                branch 'developer'
            }
            steps {
                sh '''
                    rsync -zvhr -e ssh . ubuntu@54.167.33.111:/home/ubuntu/node-app-developer-server/
                    echo "developer Sucessfully Deployed App"
                '''
            }
        }

    }
}

