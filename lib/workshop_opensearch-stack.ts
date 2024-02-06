import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ProvisionedConstruct } from './construct/provisioned';


export class WorkshopOpensearchStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ProvisionedConstruct(this, 'Provisioned', {})

  }
}
