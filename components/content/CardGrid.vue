<template>
  <section class="card-grid">
    <ContentSlot :use="$slots.root" />
    <div class="layout">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.card-grid': {
    position: 'relative',
    paddingBottom: '{space.2}',
    '@sm': {
      paddingBottom: '{space.2}',
    },
    '@lg': {
      paddingBottom: '{space.2}',
    },
    '.title': {
      marginBottom: '{space.8}',
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{elements.text.primary.color.static}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      }
    },
    '.layout': {
      display: 'grid',
      gap: '{space.4}',
      textAlign: 'start',
      '@sm': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@2xl': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '{space.8}'
      }
    }
  }
})
</style>
