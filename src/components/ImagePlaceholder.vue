<template>
  <div class="wrapper">
    <div v-if="!haveLocalImage" class="insert-image-here" @click="onPickFile" v-cloak  @drop.prevent="onDroppedFile" @dragover.prevent>
      <h4 class="title">
        {{title}}
      </h4>
      <h1 class="dimensions">
        {{width}} x {{height}}
      </h1>
      <div class="upload">
        <img src="../assets/software-upload.svg" />
        <p>
          Click to select an asset or drag & drop a file in this area
        </p>
      </div>
      <input
      type="file"
      style="display: none"
      ref="fileInput"
      accept="image/*"
      @change="onFilePicked" />
    </div>
    <div v-else>
      <img :src="localImage" @click="deleteImage()"/>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      uploadedImage: null,
      imageDeleted: false
    }
  },
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    haveLocalImage() {
      if(this.imageDeleted) {
        return false; 
      } else {
        if(localStorage.getItem(this.title.replace(" ", ""))) {
          return true;
        } else {
          if(this.uploadedImage) {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    localImage() {
      if(this.uploadedImage) {
        return this.uploadedImage;
      } else {
        return localStorage.getItem(this.title.replace(" ", ""));
      };
    }
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onDroppedFile(e) {
      const droppedFiles = e.dataTransfer.files;
      this.onFilePicked(droppedFiles[0]);
    },
    onFilePicked (event) {
      let theFile;
      if(event.target?.files[0]) {
        theFile = event.target.files[0];
      } else {
        theFile = event;
      }
      console.log(theFile);
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        this.uploadedImage = reader.result
        localStorage.setItem(this.title.replace(" ", ""), reader.result);
        this.imageDeleted = false;
      })
      reader.readAsDataURL(theFile)
    },
    deleteImage() {
      this.imageDeleted = true;
      localStorage.removeItem(this.title.replace(" ", ""));
      this.uploadedImage = null;
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    width: 100%;
      height: 100%;
    .insert-image-here {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      text-align: center;
      cursor: pointer;
      width: 100%;
      height: 100%;
      border: 4px dashed;
      border-color: var(--f-h1-text-color);
      padding: 20px;

      &:hover {
        opacity: 50%;
      }
      
      .dimensions {
        font-family: hind;
      }
      
      .upload {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        img {
          width: 24px;
          margin: auto;
        }
        p {
          margin: 0px;
          padding: 10px;
          font-size: 18px;
        }
      }
    }
  }
</style>