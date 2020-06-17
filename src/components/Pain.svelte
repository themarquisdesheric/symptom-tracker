<script>
  import CheckmarkEmoji from './CheckmarkEmoji.svelte'
</script>

<style>
  div { margin: .5rem 0; }

  div:first-of-type { margin-top: 0; }

  span {
    display: inline-block;
    width: 115px;
  }

  hr {
    position: relative;
    left: -115px;
	}
</style>

<section>
  <label>Pain</label>
  <div>
    <span>
      Head/neck
    </span>
  </div>
  <div>
    <span>
      Shoulders/arms
    </span>
    <CheckmarkEmoji /> <CheckmarkEmoji /> <CheckmarkEmoji />
  </div>
  <div>
    <span>
      Hips/low back
    </span>
    <CheckmarkEmoji />
  </div>
  <div>
    <span>
      Pelvis/bladder
    </span>
  </div>
  <div>
    <span>
      Sciatica/legs
    </span>
  </div>
  <div>
    <span>
      Bowels/rectum
    </span>
    <CheckmarkEmoji /> <CheckmarkEmoji />
  </div>
  <div>
    <span>
      Vulva/perineum
    </span>
  </div>
  <hr />
  <div>
    <span>
      Vision loss
    </span>
  </div>
</section>