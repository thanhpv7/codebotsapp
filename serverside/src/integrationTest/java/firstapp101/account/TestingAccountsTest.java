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
package firstapp101.account;

import firstapp101.SpringTestConfiguration;
import firstapp101.entities.UserEntity;
import firstapp101.configs.security.helpers.AnonymousHelper;
import firstapp101.repositories.*;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Integrated test for the whole reset password functionality
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SpringTestConfiguration.class)
@ActiveProfiles("test")
public class TestingAccountsTest {

	@Autowired
    UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

    @Autowired
    Environment env;

    private final String superAccountEmail = "super@example.com";

    private Boolean isTestOrDevelopmentEnvironment;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Before
	public void setup() {
		// % protected region % [Add any additional logic for setup before the main body here] off begin
		// % protected region % [Add any additional logic for setup before the main body here] end

		 for (int i = 0; i < env.getActiveProfiles().length; ++i) {
            if (env.getActiveProfiles()[i].equals("dev")) {
                isTestOrDevelopmentEnvironment = true;
            } else if (env.getActiveProfiles()[i].equals("test")) {
                isTestOrDevelopmentEnvironment = true;
            }
        }

		// % protected region % [Add any additional logic for setup after the main body here] off begin
		// % protected region % [Add any additional logic for setup after the main body here] end
	}

	@Test
    public void testSuperAccount_ShouldHaveSuperAccountExistInTestOrDevEnv() throws Exception {
        if (isTestOrDevelopmentEnvironment) {
            Assert.assertFalse(userRepository.findByEmail(superAccountEmail).isEmpty());
            UserEntity userEntity = (UserEntity) userRepository.findByEmail(superAccountEmail).get();

            // Check whether super user contains all the role
            AnonymousHelper.runAnonymously(() -> {
                roleRepository.findAll().forEach((roleEntity) -> {
                    Assert.assertTrue(userEntity.getRoles().contains(roleEntity));
                });
            });

        } else {
            Assert.assertTrue(userRepository.findByEmail(superAccountEmail).isEmpty());
        }
    }

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}
