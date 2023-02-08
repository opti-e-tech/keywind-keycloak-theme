<#macro kw content="" footer="" header="">
  <div class="bg-white p-8 rounded-2xl space-y-10 shadow-lg">
    <#if header?has_content>
      <div class="space-y-2">
        ${header}
      </div>
    </#if>
    <#if content?has_content>
      <div class="space-y-5">
        ${content}
      </div>
    </#if>
    <#if footer?has_content>
      <div class="space-y-5">
        ${footer}
      </div>
    </#if>
  </div>
</#macro>
