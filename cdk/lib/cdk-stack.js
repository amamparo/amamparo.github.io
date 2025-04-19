const cdk = require('aws-cdk-lib');
const { RecordTarget, HostedZone, ARecord, CnameRecord } = require('aws-cdk-lib/aws-route53');

class MyStack extends cdk.Stack {
	constructor(scope, id, props) {
		super(scope, id, props);

		const hostedZone = HostedZone.fromLookup(this, 'HostedZone', {
			domainName: 'aaronmamparo.com'
		});

		new ARecord(this, 'GithubPagesARecord', {
			zone: hostedZone,
			recordName: 'aaronmamparo.com',
			target: RecordTarget.fromIpAddresses(
				'185.199.108.153',
				'185.199.109.153',
				'185.199.110.153',
				'185.199.111.153'
			),
			ttl: cdk.Duration.seconds(60)
		});

		new CnameRecord(this, 'WWWCnameRecord', {
			zone: hostedZone,
			recordName: 'www',
			domainName: 'amamparo.github.io',
			ttl: cdk.Duration.seconds(60)
		});
	}
}

module.exports = { MyStack };
