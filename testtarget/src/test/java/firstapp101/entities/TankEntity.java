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
package firstapp101.entities;

import lombok.*;

import java.util.*;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
public class TankEntity extends AbstractEntity {

	public TankEntity() {
		initialiseReferences();
	}

	private void initialiseReferences() {


		var FishTankOneMany = new EntityReference();
			FishTankOneMany.entityName = "Fish";
			FishTankOneMany.oppositeName = "Tank";
			FishTankOneMany.name = "FishTank";
			FishTankOneMany.optional = true;
			FishTankOneMany.type = "One";
			FishTankOneMany.oppositeType = "Many";

		References.add(FishTankOneMany);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Attributes
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Modify attribute annotation for Name here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for Name here] end
	private String name;

	// % protected region % [Modify attribute annotation for Width here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for Width here] end
	private Double width;

	// % protected region % [Modify attribute annotation for Length here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for Length here] end
	private Double length;

	// % protected region % [Modify attribute annotation for Height here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for Height here] end
	private Double height;

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing one-to-one
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming one-to-one
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing one-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	private Set<FishEntity> fishTank = new HashSet<>();

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming one-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing many-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming many-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing reference methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
	 * Similar to {@link this#addFishTank(FishEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given FishEntity to be added to this entity
	 */
	public void addFishTank(@NonNull FishEntity entity) {
		addFishTank(entity, true);
	}

	/**
	 * Add a new FishEntity to fishTank in this entity.
	 *
	 * @param entity the given FishEntity  to be added to this entity
	 * @param reverseAdd whether this entity should be added to the given entity
	 */
	public void addFishTank(@NonNull FishEntity entity, boolean reverseAdd) {
		if (!this.fishTank.contains(entity)) {
			fishTank.add(entity);
			if (reverseAdd) {
				entity.setTank(this, false);
			}
		}
	}

	/**
	 * Similar to {@link this#addFishTank(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of FishEntity to be added to this entity
	 */
	public void addFishTank(@NonNull Collection<FishEntity> entities) {
		addFishTank(entities, true);
	}

	/**
	 * Add a new collection of FishEntity to Fish Tank in this entity.
	 *
	 * @param entities the given collection of FishEntity to be added to this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void addFishTank(@NonNull Collection<FishEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> addFishTank(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#removeFishTank(FishEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given FishEntity to be set to this entity
	 */
	public void removeFishTank(@NonNull FishEntity entity) {
		this.removeFishTank(entity, true);
	}

	/**
	 * Remove the given FishEntity from this entity.
	 *
	 * @param entity the given FishEntity to be removed from this entity
	 * @param reverse whether this entity should be removed from the given entity
	 */
	public void removeFishTank(@NonNull FishEntity entity, boolean reverse) {
		if (reverse) {
			entity.unsetTank(false);
		}
		this.fishTank.remove(entity);
	}

	/**
	 * Similar to {@link this#removeFishTank(Collection, boolean)} but
	 * default to true for reverse remove.
	 *
	 * @param entities the given collection of FishEntity to be removed to this entity
	 */
	public void removeFishTank(@NonNull Collection<FishEntity> entities) {
		this.removeFishTank(entities, true);
	}

	/**
	 * Remove the given collection of FishEntity from  to this entity.
	 *
	 * @param entities the given collection of FishEntity to be removed to this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void removeFishTank(@NonNull Collection<FishEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> this.removeFishTank(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#setFishTank(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of FishEntity to be set to this entity
	 */
	public void setFishTank(@NonNull Collection<FishEntity> entities) {
		setFishTank(entities, true);
	}

	/**
	 * Replace the current entities in Fish Tank with the given ones.
	 *
	 * @param entities the given collection of FishEntity to replace the old ones
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void setFishTank(@NonNull Collection<FishEntity> entities, boolean reverseAdd) {

		this.unsetFishTank();
		this.fishTank = new HashSet<>(entities);
		if (reverseAdd) {
			this.fishTank.forEach(fishTankEntity -> fishTankEntity.setTank(this, false));
		}
	}

	/**
	 * Similar to {@link this#unsetFishTank(boolean)} but
	 * default to true for reverse unset
	 */
	public void unsetFishTank() {
		this.unsetFishTank(true);
	}

	/**
	 * Remove all the entities in Fish Tank from this entity.
	 * @param doReverse whether this entity should be removed from the given entities
	 */
	public void unsetFishTank(boolean doReverse) {
		if (doReverse) {
			this.fishTank.forEach(fishTankEntity -> fishTankEntity.unsetTank(false));
		}
		this.fishTank.clear();
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming references methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	// % protected region % [Add any additional class methods  here] off begin
	// % protected region % [Add any additional class methods  here] end
}
