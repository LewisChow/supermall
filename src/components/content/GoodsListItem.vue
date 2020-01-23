<template>
  <div class="item">
    <img :src="item.show.img" alt @load="imageload" />
    <div class="item-info">
      <p>{{item.title}}</p>
      <span class="item-price">{{item.price}}</span>
      <span class="item-cfav">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageload(){
      this.$bus.$emit("itemImageLoad")
    }
  },
};
</script>

<style  scoped>
.item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}

.item img {
  width: 100%;

  border-radius: 5px;
}

.item-info {
  position: absolute;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  bottom: 5px;
  left: 0;
  right: 0;
}
.item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.item-price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.item-cfav {
  position: relative;
}

.item-cfav::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  top: -1px;
  background: url("../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>