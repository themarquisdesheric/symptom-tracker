<script>
  import Voids from './Voids.svelte'
</script>

<style>
  .entry-form > section {
    margin: 1rem 0;
  }
</style>

<div class="entry-form">
  <Voids />
	
	<section class="allergens">
		<label>Allergens</label>
		<div class="button-container">
			<button>dairy</button>
			<button>gluten</button>
			<button>sugar</button>
			<button>soy</button>
		</div>
	</section>

	<section>
		<label>Pain</label>
		<p>Head/neck</p>
		<p>Shoulders/arms</p>
		<p>Hips/low back <span style="margin-left: .25rem;">✅</span></p>
		<p>Pelvis/bladder</p>
		<p>Sciatica/legs</p>
		<p>Bowels/rectum <span style="margin-left: .25rem;">✅</span></p>
		<p>Vulva/perineum</p>
	</section>

	<section>
		<hr />
		<p>Vision loss</p>
	</section>

	<section class="symptoms">
		<label>Symptoms</label>
		<div class="button-container">
			<button>flare</button>
			<button>itch</button>
			<button>cramps</button>
			<button>discharge</button>
			<button>sex</button>
		</div>
	</section>

	<div style="margin: 0;">
		<section>
			<span>Headache</span> <input class="value" type="number" min="0" max="10" value="0" />
		</section>

		<section>
			<span>Urgency</span>
			<select class="value">
				<option>+</option>
				<option>
					calm
				</option>
				<option>
					upset
				</option>
				<option>
					very upset
				</option>
			</select>
		</section>

		<section>
			<span>Collar</span>
			<select class="value">
				<option>+</option>
				<option>
					morning
				</option>
				<option>
					day
				</option>
				<option>
					evening
				</option>
				<option>
					night
				</option>
			</select>
			<div>
				<button class="tag">morning</button>
			</div>
		</section>

		<section>
			<span>Menses cycle</span> <input class="value" type="number" min="1" max="31" value="1" />
			<!-- <button class="period-button">begin period</button> -->
			<button class="period-button">end period</button>
		</section>
	</div>

	<section id="medications">
		<span>Medications</span>
		<button>+</button>
		<!-- add button slides to right on click to reveal input
			<input style="width: 150px;" /> -->
			<div>
				<button class="tag">20mg hydrochlorine (x)</button>
			</div>
	</section>

	<section>
		<label>Notes</label>
		<textarea rows="4" style="width: 100%;"></textarea>
		<div class="save-cancel-button-container">
			<button style="background: #000; color: #fff; margin-right: .5rem;">Save</button>
			<button>Cancel</button>
		</div>
	</section>
</div>
