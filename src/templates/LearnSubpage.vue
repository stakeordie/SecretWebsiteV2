<template>
  <default-layout class="learn-subpage">
    <dynamic-breadcrumb :route="$context.route" />
    <column class="spacer-s bg-black-gradient learn-subpage__content">
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

