<template>
  <column mode="full" class="service-status-page">
    <column class="service-status__hero-container">
      <block>
        <service-status-hero></service-status-hero>
      </block>
    </column>

    <column>
      <block>
        <service-status-alert></service-status-alert>
      </block>
    </column>

    <column>
      <block>
        <service-table></service-table>
      </block>
    </column>
  </column>
</template>

<script>
import ServiceStatusAlert from "@/components/page/ServiceStatus/ServiceStatusAlert";
import ServiceStatusHero from "@/components/page/ServiceStatus/ServiceStatusHero";
import ServiceTable from "@/components/page/ServiceStatus/ServiceTable";

export default {
  components: {
    ServiceStatusAlert,
    ServiceStatusHero,
    ServiceTable
  }
};
</script>

<style lang="scss">
.--flare-page .service-status-page > .--flare-block > .content > .box {
  padding: 0;
}
</style>
