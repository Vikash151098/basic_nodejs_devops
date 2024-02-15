pipeline {
    agent any
    stages {
        stage('git checkout') {
            steps {
                deleteDir()
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                echo 'Building..'
                echo "build number :${env.BUILD_ID}"
                sh "docker build -t expressjs_basic_i:${env.BUILD_ID} ."
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                // sh "docker stop expressjs_basic_c"
                sh "docker run -d --rm -p 4000:4000 --name expressjs_basic_c  expressjs_basic_i:${env.BUILD_ID}"
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
