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
package firstapp101.configs.security.filters;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.filter.AbstractRequestLoggingFilter;
import javax.servlet.http.HttpServletRequest;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Enumeration;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Filter logging all the request to the rquest files
 * @see org.springframework.web.filter.AbstractRequestLoggingFilter
 * The logger is implemented with the logback. The format is avaible in resources/logback/logback-spring.xml
 * @author Codebots
 */
@Slf4j(topic = "requestLogger")
public class RequestLoggingFilter extends AbstractRequestLoggingFilter {
	
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
	
	public RequestLoggingFilter() {
		// % protected region % [Add custom configuration for the logging filter here] off begin
		setIncludePayload(true);
		setMaxPayloadLength(10000);
		setIncludeQueryString(true);
		// % protected region % [Add custom configuration for the logging filter here] end
	}
	
	// % protected region % [Add any additional class constructors here] off begin
	// % protected region % [Add any additional class constructors here] end	

	@Override
	protected void beforeRequest(HttpServletRequest request, String message) {
		// % protected region % [Add logic for before the request] off begin
		// % protected region % [Add logic for before the request] end
	}

	/**
	 * Logging the request after server handle the servlet request
	 * Not logging in before because the payload is not avaialbe beforeRequest
	 * @param request Http Request
	 * @param message Predefined message generate by the AbstractRequestLoggingFilter
	 */
	@Override
	protected void afterRequest(HttpServletRequest request, String message) {
		// % protected region % [Change the format of the logging here] off begin
		OffsetDateTime now = OffsetDateTime.now().truncatedTo(ChronoUnit.MILLIS);
		DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
		Enumeration<String> headersNames = request.getHeaderNames();
		StringBuilder headers = new StringBuilder("{");
		headersNames.asIterator().forEachRemaining((headName) -> {
			headers.append(headName).append(":").append(request.getHeader(headName)).append(",");
		});
		headers.append("}");
		log.info("Method: [{}], URI: [{}], User: [{}], Time: [{}], Payload: [{}], Headers: [{}]",
				request.getMethod(),
				request.getRequestURI(),
				request.getRemoteUser(),
				formatter.format(now),
				getMessagePayload(request),
				headers.toString()
		);
		// % protected region % [Change the format of the logging here] end
	}
	
	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
