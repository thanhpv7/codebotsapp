/*
 * @bot-written
 * 
 * WARNING AND NOTICE
 * Any access, download, storage, and/or use of this source code is subject to the terms and conditions of the
 * Full Software Licence as accepted by you before being granted access to this source code and other materials,
 * the terms of which can be accessed on the Codebots website at https://codebots.com/full-software-licence. Any
 * commercial use in contravention of the terms of the Full Software Licence may be pursued by Codebots through
 * licence termination and further legal action, and be required to indemnify Codebots for any loss or damage,
 * including interest and costs. You are deemed to have accepted the terms of the Full Software Licence on any
 * access, download, storage, and/or use of this source code.
 * 
 * BOT WARNING
 * This file is bot-written.
 * Any changes out side of "protected regions" will be lost next time the bot makes any changes.
 */
package firstapp101.configs;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.*;

@Configuration
public class S3BucketConfig {
	@Bean(name = "awsRegion")
	@ConditionalOnProperty(name = "aws.region")
	public Region getAWSPollyRegion(@Value("${aws.region}") String awsRegion) {
		return Region.getRegion(Regions.fromName(awsRegion));
	}

	@Bean(name = "awsCredentialsProvider")
	@ConditionalOnProperty(name = "aws.access.key.id")
	public AWSCredentialsProvider getAWSCredentials(@Value("${aws.access.key.id}") String awsKeyId, @Value("${aws.access.key.secret}") String awsKeySecret) {
		BasicAWSCredentials awsCredentials = new BasicAWSCredentials(awsKeyId, awsKeySecret);
		return new AWSStaticCredentialsProvider(awsCredentials);
	}
}