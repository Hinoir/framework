<template >
  <mdb-container>
    <mdb-row>
      <mdb-col sm="4">
        <mdb-card dark>
          <mdb-view hover>
            <p class="h4 text-center py-4">Sign up</p>
          </mdb-view>
          <mdb-card-body color="elegant" class="white-text">
            <div class="grey-text">
              <mdb-input
                label="Nombre"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                label="Apellido"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                label="Correo electronico"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                icon="exclamation-triangle"
                group
                type="date"
                validate
                error="wrong"
                success="right"
                label="Valido hasta"
              />
              <mdb-input label="Contraseña" icon="lock" group type="password" validate />
            </div>
            <div class="text-center">
              <button class="btn peach-gradient">Registrarse</button>
            </div>
            <mdb-modal-footer class="mx-5 pt-3 mb-1">
              <p class="font-small grey-text d-flex justify-content-end">
                Already a member?
                <a href="#" class="blue-text ml-1">Iniciar sesión</a>
              </p>
            </mdb-modal-footer>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbView,
  mdbModalFooter
} from "mdbvue";
export default {
  name: "CardProPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbView,
    mdbModalFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>