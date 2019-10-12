<template>
  <section id="profile">
      <mdb-row class="d-flex justify-content-center">
        <mdb-col md="3">
          <mdb-card cascade narrow>
            <mdb-view>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
                alt="Project"
                class="img-fluid"
              />
              <mdb-mask overlay="white-slight" waves />
            </mdb-view>
            <mdb-card-body class="text-center">
              <mdb-card-title class="font-bold mb-2">
                <strong>Alice Mayer</strong>
              </mdb-card-title>
              <h5 class="indigo-text">
                <strong>Photographer</strong>
              </h5>
              <h6 class="text-justify">
                <strong>About:</strong>
              </h6>
              <p
                class="text-justify"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...</p>
              <div class="text-right">
                <mdb-btn outline="primary" rounded size="sm">More...</mdb-btn>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="12">
          <div class="text-center">
            <mdb-pagination circle color="blue">
              <mdb-page-item disabled>Primero</mdb-page-item>
              <mdb-page-nav prev></mdb-page-nav>
              <mdb-page-item active>1</mdb-page-item>
              <mdb-page-item>2</mdb-page-item>
              <mdb-page-item>3</mdb-page-item>
              <mdb-page-item>4</mdb-page-item>
              <mdb-page-item>5</mdb-page-item>
              <mdb-page-nav next></mdb-page-nav>
              <mdb-page-item disabled>Ultimo</mdb-page-item>
            </mdb-pagination>
          </div>
        </mdb-col>
      </mdb-row>
  </section>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbView,
  mdbMask,
  mdbCardTitle,
  mdbBtn,
  mdbPagination,
  mdbPageNav,
  mdbPageItem
} from "mdbvue";
export default {
  name: "Profile",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbView,
    mdbMask,
    mdbCardTitle,
    mdbBtn,
    mdbPagination,
    mdbPageNav,
    mdbPageItem
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.profile-card-footer {
  background-color: #f7f7f7 !important;
  padding: 1.25rem;
}
.card.card-cascade .view {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);
}
</style>