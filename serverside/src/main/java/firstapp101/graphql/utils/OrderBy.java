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
package firstapp101.graphql.utils;

import lombok.Data;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.domain.Sort.Direction;
import java.util.List;
import java.util.stream.Collectors;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * The Order by class mapped from the graphql
 * This is used in the service to sort the query
 */
@Data
public class OrderBy {
	/**
	 * The path of the property to order by
	 */
	private String path;

	/**
	 * The direction of the order
	 * ASC or DESC
	 */
	private boolean descending;

	/**
	 * Transfer the OrderBy to Order in the Sort Class in Repository
	 */
	public Order toSortOrder() {
		Direction direction = descending ? Direction.DESC : Direction.ASC;
		return new Order(direction, path);
	}

	/**
	 * Transfer the List of Order By to the List of Order
	 */
	static public List<Order> toSortOrders(List<OrderBy> orders ) {
		return orders.stream().map(OrderBy::toSortOrder).collect(Collectors.toList());
	}
}
