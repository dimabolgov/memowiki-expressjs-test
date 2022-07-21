pipeline {
    agent any
    stages {
        stage('Environment') {
            steps {
                sh 'git --version'
                echo "Branch: ${env.BRANCH_NAME}"
                sh 'docker -v'
                sh 'printenv'
            }
        }
        stage('Build React') {
            steps {
                sh 'docker build -t expressjs_v1 -f Dockerfile --no-cache .'
                sh 'docker stop expressjs_v1 || true && docker rm expressjs_v1 || true'
                sh 'docker run -d -it -p 4444:80 --net=vnoveprod_app-net --name=expressjs_v1 expressjs_v1'
            }
        }
        stage('Deliver') {
            steps {
                sh 'pwd'
                // input 'Does the staging environment look ok?'
            }
        }
    }
}
