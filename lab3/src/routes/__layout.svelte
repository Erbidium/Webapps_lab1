<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.scss';
</script>

<Header>
  <main>
    <slot />
  </main>
</Header>
<slot />
