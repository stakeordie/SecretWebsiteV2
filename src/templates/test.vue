<template>
  <default-layout class="content">
    <column class="spacer-s bg-black-gradient">
    <div v-for="component in $context.components">
      <block>
        <div v-if="component.comp_name == 'card-grid-partners'">
          <column class="spacer-s bg-black-gradient">
            <block>
              <component :is="component.comp_name" :header="component.header" :title="component.title" :collection="component.collection" :isPaginated="component.is_paginated">
                {{component.content ? component.content : ""}}
              </component>
            </block>
          </column>
        </div>
        <component v-else v-bind:is="component.comp_name" props="">
          {{component.content ? component.content : ""}}
        </component>
      </block>
    </div>
    </column>
  </default-layout>
</template>
