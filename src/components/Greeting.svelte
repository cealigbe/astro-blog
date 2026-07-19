<script>
    let { messages } = $props();

    let greeting = $state("Hello");

    function randomMessage() {
      let message = messages[Math.floor(Math.random() * messages.length)];
      greeting = message;
      // console.log(message);
    }
</script>

<div class="greeting">
    <h3><span class="notice">{greeting}!</span> Thank you for visiting.</h3>

    <button onclick={randomMessage}>
        New Greeting
    </button>
</div>

<style>
    .greeting {
        width: 100%;
        margin-bottom: 2rem;
        padding: 2rem;
        border: 2px solid var(--clr-primary-light);
        border-radius: 1rem;
        border-bottom-right-radius: 0;
    }

    .notice {
        text-decoration: underline;
        color: var(--clr-primary-dark);
    }
</style>
