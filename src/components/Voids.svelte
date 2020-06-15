<style>
  .pee-button-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.pee-button-container button {
		font-size: 1.75rem;
		padding: 0;
		border: none;
    background: transparent;
	}

  .delta span { padding-left: .5rem; }

  .nocturia input { margin-bottom: 0; }
  
  .pee-button-container label { 
    width: unset;
    margin-bottom: 0;
  }

	.pee-button-container label * { 
		font-weight: normal;
		color: #fff;
	}

	.pee-chart {
		border: 1px solid;
		border-radius: 5px;
		padding: 1rem;
		background: #fff;
	}
</style>

<section>
  <label>Voids</label>
  <div class="pee-button-container">
    <div>
      <button>💧</button>
      <!-- renders on pee/poop click <span>🕓</span> -->
      <button>💩</button>
      <!-- renders on pee/poop click <span>🕓</span> -->
    </div>
    <label class="delta">Delta <span>60min</span></label>
    <label class="nocturia">
      Nocturia <input type="number" min="0" max="10" value="0" />
    </label>
  </div>
  <div class="pee-chart">pee/poo chart from 5am - 10pm</div>
</section>