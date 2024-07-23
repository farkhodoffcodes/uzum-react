import styled from "styled-components";



export const CartWrapper = styled.div`
.cart__inner {
    display: flex;
    gap: 20px;

    .cart__inner--top {
            display: flex;
                                      align-items:center;
                                      justify-content: space-between;
                                      margin-bottom: 20px;
    }

    .top {
                                      margin-bottom: 20px;
            span {
                font-size: 12px;
                color: dimgray;
                display: inline-block;
                margin-bottom: 10px;
            }

            h6 {
                font-size: 18px;
            }
    }

    &--left {
        width: 70%;
                padding: 20px 10px;
                margin-bottom: 10px;
                border-radius: 20px;
                box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;


                .bottom,  .bottom--wrapper,  .bottom--wrapper--top ,   .bottom--wrapper--bottom   {
                                            display: flex;
                                      gap: 20px;
                                    img {
                                width: 120px;
                                height: 120px;
                            }

                            .bottom--wrapper--top {
                                    button {
                                        margin-left: auto;
                                        border: none;
                                        background: transparent;
                                        gap: 10px;
                                        display: flex;
                                        cursor: pointer;
                                    }
                            }
                }
                            
    }

    &--right {
        margin-left: auto;

        .cart__inner--right--top ,  .cart__inner--right--bottom {
           padding: 20px 10px;
                margin-bottom: 10px;
                border-radius: 20px;
        } 

        .cart__inner--right--top {
                box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        }

        .cart__inner--right--bottom{
            box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        }
    }
}
`