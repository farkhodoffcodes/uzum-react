import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 232px;
    transition: all .3s ease-in-out;
    border-radius: 10px;



    &:hover {
        transition: all .3s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    .product__top {


    position: relative;
        &--image {
        width: 100%;
        height: auto;
        border-radius: 10px;

        &-sub {
                 position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-top-right-radius: 10px;
                background-color: #7000ff;
                padding: 2px 10px;
                color: white;
        }
        }

        &--btn {
        position: absolute;
        top:12px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 18px;
        &:hover {
            cursor: pointer;
        }
        }
    }


    .product__bottom {
        padding: 10px;
position: relative;


    &--heading  {
        font-size: 14px;
        margin-bottom: 12px;
    }

     &--rating {
        margin-bottom: 5px;


     i {
        color:  #FFD43B;
     }
    }

    &--monthly-payment {
    background-color: #ffff00;
    border-radius: 7px;
        margin-bottom: 5px;
    width: 70%;
    padding: 2px 5px;
    }
 &--old-price {
 font-size: 14px;
}

 &--price {
 font-size: 18px;
}

    &--btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: transparent;
    border-radius: 50%;
    padding: 6px 5px;
    border-width: 1px;
    cursor: pointer;
    }
    }
`