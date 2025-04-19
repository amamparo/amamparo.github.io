#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { MyStack } = require('../lib/cdk-stack');

const app = new cdk.App();
new MyStack(app, 'Homepage', {
  env: { account: '388646735826', region: 'us-east-1' }
});
