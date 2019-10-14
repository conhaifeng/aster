<template>
    <el-cascader v-model="address" :options="addresslist" @change="updateAddress"></el-cascader>
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      address: this.value,
      detail:1000,
      addresslist: [
        {
          value: "hebei",
          label: "河北",
          children: [
            {
              value: "shijiazhuang",
              label: "石家庄"
            },
            {
              value: "baoding",
              label: "保定"
            },
            {
              value: "tangshan",
              label: "唐山"
            },
            {
              value: "xingtai",
              label: "邢台"
            },
            {
              value: "langfang",
              label: "廊坊"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京"
            },
            {
              value: "suzhou",
              label: "苏州"
            },
            {
              value: "wuxi",
              label: "无锡"
            },
            {
              value: "changzhou",
              label: "常州"
            },
            {
              value: "xuzhou",
              label: "徐州"
            }
          ]
        },
        {
          value: "shandong",
          label: "山东",
          children: [
            {
              value: "jinan",
              label: "济南"
            },
            {
              value: "qingdao",
              label: "青岛"
            },
            {
              value: "yantai",
              label: "烟台"
            },
            {
              value: "heze",
              label: "菏泽"
            }
          ]
        },
        {
          value: "xinjiang",
          label: "新疆",
          children: [
            {
              value: "wulumuqi",
              label: "乌鲁木齐"
            },
            {
              value: "hami",
              label: "哈密"
            },
            {
              value: "tulufan",
              label: "吐鲁番"
            }
          ]
        },
        {
          value: "henan",
          label: "河南",
          children: [
            {
              value: "zhengzhou",
              label: "郑州"
            },
            {
              value: "luoyang",
              label: "洛阳"
            },
            {
              value: "kaifeng",
              label: "开封"
            },
            {
              value: "xuchang",
              label: "许昌"
            }
          ]
        }
      ]
    };
  },
  methods: {
    updateAddress: function() {
      this.$emit("update:value", this.address);
    }
  }
};
</script>

<style scoped>
</style>
