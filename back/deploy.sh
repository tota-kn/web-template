#!/bin/bash

WORKING_DIRECTORY=`dirname $0`

# aws cloudformation validate-template \
#     --template-body "${WORKING_DIRECTORY}/template.yml" && \
aws cloudformation package \
    --template-file template.yml \
    --s3-bucket "iwato-cfn-deploy" \
    --s3-prefix web-template/dev \
    --output-template-file "dist/wev-temmplate.dev" && \
aws cloudformation deploy \
    --stack-name  web-template-test4 \
    --template-file /home/yt/repos/web-template/back/dist/wev-temmplate.dev \
    --parameter-overrides Stage=dev