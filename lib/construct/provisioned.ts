import { Construct } from 'constructs';
import { aws_opensearchservice as opensearch } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';

export interface ProvisionedConstructProps {

}

export class ProvisionedConstruct extends Construct {
  constructor(scope: Construct, id: string, props: ProvisionedConstructProps) {
    super(scope, id);


    const domain = new opensearch.Domain(this, 'Domain', {
      domainName: 'openserach-labs-domain',
      version: opensearch.EngineVersion.OPENSEARCH_1_3,
      capacity: {
        multiAzWithStandbyEnabled: false,
        // masterNodes: 1,
        // masterNodeInstanceType: 't3.small.search',
        dataNodes: 1,
        dataNodeInstanceType: 't3.small.search',
      },
      fineGrainedAccessControl: {
        masterUserName: 'opensearch',
      },
      nodeToNodeEncryption: true,
      encryptionAtRest: {
        enabled: true
      },
      enforceHttps: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    domain.addAccessPolicies(
      new iam.PolicyStatement({
        principals: [new iam.AnyPrincipal()],
        actions: ['es:*'],
        resources: [`${domain.domainArn}/*`],
        conditions: {
          IpAddress: {
            "aws:SourceIp": process.env.CLIENT_IP
          }
        }
      })

    )


  }
}