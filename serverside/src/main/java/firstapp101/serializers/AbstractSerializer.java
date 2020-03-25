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
package firstapp101.serializers;

import firstapp101.entities.AbstractEntity;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.time.OffsetDateTime;
import java.time.OffsetTime;
import java.time.format.DateTimeFormatter;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base class of all serializer classes. It provides a handful of common operations out-of-the-box.
 */
public abstract class AbstractSerializer<T extends AbstractEntity> extends StdSerializer<T> {

	private final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_DATE_TIME;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected AbstractSerializer(Class<T> src) {
		super(src);
	}

	protected void writeStringField(JsonGenerator gen, String key, String value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			gen.writeStringField(key, value);
		}
	}

	protected void writeBooleanField(JsonGenerator gen, String key, Boolean value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			gen.writeBooleanField(key, value);
		}
	}

	protected void writeIntegerField(JsonGenerator gen, String key, Integer value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			gen.writeNumberField(key, value);
		}
	}

	protected void writeDoubleField(JsonGenerator gen, String key, Double value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			gen.writeNumberField(key, value);
		}
	}

	protected void writeFloatField(JsonGenerator gen, String key, Float value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			gen.writeNumberField(key, value);
		}
	}

	protected void writeLongField(JsonGenerator gen, String key, Long value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			gen.writeNumberField(key, value);
		}
	}

	protected void writeOffsetDateTimeField(JsonGenerator gen, String key, OffsetDateTime value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			writeStringField(gen, key, dateTimeFormatter.format(value));
		}
	}

	protected void writeOffsetTimeField(JsonGenerator gen, String key, OffsetTime value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			writeObjectField(gen, key, value);
		}
	}

	protected void writeObjectField(JsonGenerator gen, String key, Object value) throws IOException {
		if (value == null) {
			gen.writeNullField(key);
		} else {
			gen.writeObjectField(key, value);
		}
	}

	@Override
	public void serialize(T value, JsonGenerator gen, SerializerProvider provider) throws IOException {
		gen.writeStartObject();
		writeObjectField(gen, "id", value.getId());
		writeOffsetDateTimeField(gen, "created", value.getCreated());
		writeOffsetDateTimeField(gen, "modified", value.getModified());
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
