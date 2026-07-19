<script>
    let count = $state(0);

    function increment() {
      count ++;
    }

    function decrement() {
      count --;
    }

    function resetCount() {
      count = 0;
    }
</script>

<div class="counter">
    <p class="display">{count}</p>

    <div class="controls">
        <button onclick={decrement} class="btn-sq">
            &minus;
        </button>
        <button onclick={resetCount}>
            Reset
        </button>
        <button onclick={increment} class="btn-sq">
            &plus;
        </button>
    </div>
</div>

<style>
    button {
        margin: 0;
    }

    .counter {
        margin: 2rem auto;
        width: min-content;
        padding: 2rem;
        border: 2px solid var(--clr-primary);
        border-radius: 1rem;
    }

    .display {
        font-family: var(--font-mono);
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
    }

    .controls {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .btn-sq {
        width: 3rem;
        height: 3rem;

    }
</style>
