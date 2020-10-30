<template>
    <div class="companySelect">
        <el-input
            placeholder="请输入内容"
            :value="value"
            @input="handleChange"
            @blur="handleBlur"
            @focus="handleFocus"
        ></el-input>
        <div
            class="companySelect__container"
            v-if="isOpen"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
        >
            <dl class="companySelect__list">
                <div
                    class="companySelect__item"
                    v-for="item in list"
                    :key="item.customer_id"
                    @click.stop="handleClick(item)"
                >
                    <div class="companySelect__content">
                        <dt>{{ item.company_name }}</dt>
                        <dd>归属地：{{ item.customer_address }}</dd>
                        <dd>位置：{{ item.customer_position_name }}</dd>
                        <dd class="companySelect__position">团队：{{ item.team_users }}</dd>
                    </div>
                    <div class="companySelect__btn" v-if="item.button_name != ''">
                        <el-button type="primary" @click.stop="handleClick(item)"
                            >{{ item.button_name }}
                        </el-button>
                    </div>
                </div>
            </dl>
        </div>
        <div
            class="companySelect__empty"
            v-if="isOpenEmpty"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            style="text-align:center"
        >
            暂无数据
        </div>
        <div class="maskLayer" v-if="isOpen || isOpenEmpty" @click="handleClickMaskLayer"></div>
    </div>
</template>

<script>
import {
    ApiCustomerListByCompanyName,
    ApiLeadConvertCustomer,
    ApiCustomerSeaPickUp,
} from "@/api/customer/customer";
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["commonReq"])
    },
    model: {
        prop: "value",
        event: "input",
    },
    props: ["value"],
    name: "CompanySelect",
    watch: {
        list(newVal, oldVal) {
            if (newVal.length > 0) {
                this.isOpen = true;
                this.isOpenEmpty = false;
            }
            if (newVal.length === 0) {
                this.isOpenEmpty = true;
                this.isOpen = false;
            }
        },
    },
    data() {
        return {
            isCheck: true,
            list: [],
            isOpenEmpty: false,
            isOpen: false,
            isClickedItem: false,
        };
    },
    methods: {
        handleChange(val) {
            this.$emit("input", val);
            // this.$emit("handleList", val);
            this.handleList(val);
        },
        handleFocus() {
            this.isClickedItem = false;
            this.handleList(this.value);
        },
        handleBlur() {
            if (this.isCheck) {
                this.$emit("handleBlur");
            }
        },
        handleMouseEnter() {
            console.log("enter");
            this.isCheck = false;
            console.log(this.isCheck);
        },
        handleMouseLeave() {
            console.log("leave");
            this.isCheck = true;
            console.log(this.isCheck);
        },
        handleClickMaskLayer() {
            this.isOpenEmpty = false;
            this.isOpen = false;
            if (this.isClickedItem) {
                this.handleCheckCompany();
            }
            if (this.isCheck) {
                this.handleCheckCompany();
            }
        },
        handleList(company_name) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.loading = true;
                ApiCustomerListByCompanyName({ company_name }).then((res) => {
                    if (res.data.code == 0) {
                        this.list = res.data.data.list;
                    } else {
                        this.list = [];
                    }
                });
                clearTimeout(this.timer);
                this.timer = null;
            }, 300);
        },
        handleCloseEmpty() {
            this.isOpenEmpty = false;
        },
        handleClose() {
            this.isOpen = false;
        },
        handleClick(item) {
            const fn = {
                2: "handlePrivate",
                3: "handleSuccess",
            };
            if (
                item.customer_position == 1 &&
                this.commonReq.rightData.sales_lead_convert_customer == 1
            ) {
                this.handleLead(item);
            } else if (
                item.customer_position == 4 &&
                this.commonReq.rightData.sales_customer_pick_up == 1
            ) {
                this.handleOpenSea(item);
            } else if (item.customer_position == 2 || item.customer_position == 3) {
                this[fn[item.customer_position]](item);
            }

            // after
            const position = item.customer_position;
            const rightData = this.commonReq.rightData;
            if (position == 2 || position == 3) {
                this[fn[item.customer_position]](item);
                return;
            }

            if (position == 1 && rightData.sales_lead_convert_customer == 1) {

            }

            if (position == 4 && rightData.sales_customer_pick_up == 1) {

            }
        },
        handleLead(item) {
            this.$confirm("该客户已存在线索，是否确认转为客户?", "提示", { type: "warning" }).then(
                () => {
                    ApiLeadConvertCustomer({ customer_id: item.customer_id }).then((res) => {
                        this.isOpenEmpty = false;
                        this.isOpen = false;
                        if (res.data.code == 0) {
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    });
                }
            );
        },
        handlePrivate(item) {
            this.$alert("跟进中私海客户不能重复跟进，请重新确认", "提示", {
                confirmButtonText: "确定",
                callback: (action) => {
                    this.isOpenEmpty = false;
                    this.isOpen = false;
                },
            });
        },
        handleOpenSea(item) {
            let that = this;
            const h = that.$createElement;
            that.$msgbox({
                title: "提示",
                message: h("p", null, [
                    h("span", null, "该客户已存在公海，是否确认领取该公海客户? "),
                    h("div", { style: "font-weight: bold" }, "公司名称：" + item.company_name),
                    h("div", null, "归属地：" + (item.customer_address || "--")),
                    h(
                        "span",
                        null,
                        "位置：" + item.customer_position_name + "       团队：" + item.team_users
                    ),
                ]),
                showCancelButton: true,
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                beforeClose: (action, instance, done) => {
                    if (action === "confirm") {
                        ApiCustomerSeaPickUp({ customer_id: item.customer_id }).then((res) => {
                            that.isOpenEmpty = false;
                            that.isOpen = false;
                            if (res.data.code == 0) {
                                that.$message.success(res.data.msg);
                            } else {
                                that.$message.error(res.data.msg);
                            }
                            done();
                        });
                    } else {
                        done();
                    }
                },
            });
        },
        handleSuccess(item) {
            this.$alert("成交客户不能重复跟进", "提示", {
                confirmButtonText: "确定",
                callback: (action) => {
                    this.isOpenEmpty = false;
                    this.isOpen = false;
                },
            });
        },
        handleCheckCompany() {
            console.log(this.value);
        },
    },
};
</script>

<style lang="scss" scoped>
.el-input {
    position: relative;
    z-index: 2010;
}
.companySelect__container {
    width: 100%;
    z-index: 2010;
    background-color: #fff;
    position: absolute;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-height: 300px;
    overflow: auto;
    box-sizing: border-box;
}

.companySelect__item {
    &:hover {
        cursor: pointer;
    }

    border-bottom: 1px solid #ddd;
    padding: 10px;
    display: flex;

    .companySelect__content {
        width: 80%;

        .companySelect__position {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .companySelect__btn {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.maskLayer {
    position: fixed;
    z-index: 2005;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
}

.companySelect__empty {
    width: 100%;
    z-index: 2010;
    background-color: #fff;
    position: absolute;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-height: 300px;
    overflow: auto;
    box-sizing: border-box;
    text-align: center;
}
</style>
