#!/bin/bash -e

SYSTEM_ID=web-template
STAGE=dev

WORKING_DIRECTORY=`dirname $0`
DIST="${WORKING_DIRECTORY}/dist"
TEMPLATE_FILE="${WORKING_DIRECTORY}/template.yml"
OUTPUT_TEMPLATE_FILE="${DIST}/${SYSTEM_ID}.${STAGE}"

S3_OUTPUT_TEMPLATE=aws-sam-cli-managed-default-samclisourcebucket-pc9rxjxha1vt 

echo "\n### Validating"
aws cloudformation validate-template --template-body file://${TEMPLATE_FILE}

echo "\n### Packaging"
aws cloudformation package \
    --template-file ${TEMPLATE_FILE} \
    --s3-bucket ${S3_OUTPUT_TEMPLATE} \
    --s3-prefix "${SYSTEM_ID}/${STAGE}" \
    --output-template-file ${OUTPUT_TEMPLATE_FILE} && \

echo "\n### Deploying"
aws cloudformation deploy \
    --stack-name  ${SYSTEM_ID}-${STAGE} \
    --template-file ${OUTPUT_TEMPLATE_FILE} \
    --parameter-overrides Stage=${STAGE} \
    --capabilities CAPABILITY_IAM