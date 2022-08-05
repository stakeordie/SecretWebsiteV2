<template>
  <default-layout class="content">
    <column class="spacer-s bg-black-gradient">
    <div v-for="component in $context.components">
      <block>
        <component :is="component.comp_name" v-bind="component">
          {{ component.content ? component.content : "" }}
        </component>
      </block>
    </div>
    </column>
  </default-layout>
</template>
