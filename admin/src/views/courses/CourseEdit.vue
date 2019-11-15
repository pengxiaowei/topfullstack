<template>
  <div>
    <h3>{{isnew ? '创建' : '编辑'}}课程</h3>
    <ele-form :form-data="data" :form-desc="fields" :request-fn="submit"></ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CourseEdit extends Vue {
  data = {};
  @Prop(String) id: string;

  fields = {
    _id: { label: "ID" },
    name: { label: "课程名称", type: "input" },
    cover: { label: "课程封面图", type: "input" }
  };

  get isnew() {
    return !this.id;
  }

  async fetch() {
    const res = await this.$http.get(`courses/${this.id}`);
    this.data = res.data;
  }

  async submit(data) {
    const url = this.isnew ? `courses` : `courses/${this.id}`;
    const method = this.isnew ? "post" : "put";
    await this.$http[method](url, data);
    this.$message.success("保存成功");
    this.data = {};
    this.$router.go(-1);
  }

  created() {
    !this.isnew && this.fetch();
  }
  
}
</script>

<style>
</style>