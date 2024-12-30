#!/bin/bash

WORKING_DIRECTORY=`dirname $0`
S3_OUTPUT_TEMPLATE=aws-sam-cli-managed-default-samclisourcebucket-pc9rxjxha1vt 
STAGE=dev

# aws cloudformation validate-template \
#     --template-body "${WORKING_DIRECTORY}/template.yml" && \
aws cloudformation package \
    --template-file ${WORKING_DIRECTORY}/template.yml \
    --s3-bucket ${S3_OUTPUT_TEMPLATE} \
    --s3-prefix web-template/${STAGE} \
    --output-template-file "${WORKING_DIRECTORY}/dist/web-temmplate.${STAGE}" && \
aws cloudformation deploy \
    --stack-name  web-template-${STAGE} \
    --template-file ${WORKING_DIRECTORY}/dist/web-temmplate.${STAGE} \
    --parameter-overrides Stage=${STAGE} \
    --capabilities CAPABILITY_IAM