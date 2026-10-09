
<script setup>
import { computed, ref } from 'vue'

const step = ref(0)
const openedCards = ref([])
const answer = ref('')

const reasons = [
  {
    emoji: '🌱',
    title: 'The little things',
    description:
      'Obrolan sederhana sama Lala bisa bikin hari biasa terasa sedikit lebih seru. Bahaya juga, ya.',
  },
  {
    emoji: '🌈',
    title: 'Your happy vibes',
    description:
      'Kamu punya vibes yang bikin suasana jadi lebih menyenangkan. Kayak mood booster, tapi versi manusia.',
  },
  {
    emoji: '😹',
    title: 'Your kind of funny',
    description:
      'Aku bikin humor, ternyata Lala yang lebih lucu. Kayaknya selera humorku perlu diperiksa.',
  },
  {
    emoji: '😗',
    title: 'Your teasing',
    description:
      'Ini aneh banget, ya, kok malah jadi salah satu hal favoritku.',
  },
  {
    emoji: '🌷',
    title: 'Just being you',
    description:
      'Nggak harus selalu ada alasan besar. Meski begitu Lala punya sesuatu yang membuatku ingin mengenalmu lebih jauh.',
  },
]

const progress = computed(() => ((step.value + 1) / 4) * 100)
const allCardsOpened = computed(
  () => openedCards.value.length === reasons.length,
)

function toggleCard(index) {
  if (openedCards.value.includes(index)) {
    openedCards.value = openedCards.value.filter((item) => item !== index)
  } else {
    openedCards.value = [...openedCards.value, index]
  }
}

function nextStep() {
  if (step.value < 3) step.value++
}

function previousStep() {
  if (step.value > 0) step.value--
}

function restart() {
  step.value = 0
  openedCards.value = []
  answer.value = ''
}
</script>

<template>
  <main class="cute-page">
    <div class="decorations" aria-hidden="true">
      <span class="floaty floaty-1">♡</span>
      <span class="floaty floaty-2">✿</span>
      <span class="floaty floaty-3">✧</span>
      <span class="floaty floaty-4">♡</span>
      <span class="floaty floaty-5">✦</span>
    </div>

    <header class="cute-header">
      <button class="brand" @click="restart" aria-label="Kembali ke awal">
        <span class="brand-icon">♥</span>
        <span>Lala crush club</span>
      </button>
      <span class="step-counter">{{ step + 1 }} / 4</span>
    </header>

    <div class="progress-track">
      <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
    </div>

    <Transition name="page" mode="out-in">
      <section :key="step" class="page-content">
        <!-- PAGE 1: INTRO -->
        <template v-if="step === 0">
          <div class="sticker sticker-top">a tiny surprise!</div>

          <div class="hero-illustration" aria-hidden="true">
            <div class="hero-cloud cloud-left">☁</div>
            <div class="hero-cloud cloud-right">☁</div>

            <div class="gift-box">
              <div class="gift-lid">
                <span class="gift-bow">🎀</span>
              </div>
              <div class="gift-body">
                <div class="gift-ribbon"></div>
                <span class="gift-heart">♥</span>
              </div>
            </div>

            <span class="hero-spark spark-a">✦</span>
            <span class="hero-spark spark-b">✧</span>
            <span class="hero-spark spark-c">♡</span>
          </div>

          <div class="hero-copy">
            <span class="eyebrow">HEY, YOU! 💌</span>
            <h1>
              Psst... ada<br />
              <span>sesuatu nih!</span>
            </h1>
            <p>
              Ini kejutan kecil dari aku yang ingin menyampaikan sesuatu namun malu-malu. 🤏💗
              <br>Sooo, I made this tiny corner of the internet just for you.
            </p>
          </div>

          <button class="primary-button" @click="nextStep">
            Buka kejutan <span>♡</span>
          </button>
          <p class="micro-copy">warning: may cause random smiling ☻</p>
        </template>

        <!-- PAGE 2: LETTER -->
        <template v-else-if="step === 1">
          <div class="section-label">💌 SECRET LETTER</div>

          <div class="letter-card">
            <div class="letter-decoration">
              <span>dear Lala,</span>
              <span class="letter-flower">🌷</span>
            </div>

            <div class="letter-line"></div>

          <p>Hai, kamu yang entah kenapa berhasil bikin hormon-hormonku kerja lembur. 💗</p>

            <p>Katanya, saat jatuh cinta, dopamin bikin kita senang setiap kali mendapat perhatian dari seseorang. Pantesan, tiap ada Lala, senyumku suka muncul sendiri tanpa aba-aba. </p>

            <p>Belum lagi Adrenalin yang bikin jantung berdebar tiap kamu muncul, apalagi saat genggaman tangan couplean itu~ 🦋</p>

            <p>Kenalin juga yang namanya Cortisol, hormon stres yang suka ngilang kalau lagi sama kamu ✌️</p>

            <p>Terus si Serotonin jadi jalan-jalan dalam tubuh, bikin merasa nyaman & bahagia gitu 😸</p>

            <p>Terus ada si Oksitosin, yang katanya bikin ikatan emosional makin erat. Pantesan, setiap dekat Lala, rasanya makin nyaman, makin sayang, dan makin pengin genggam tangan itu lebih lama. 🥹💗 </p>

            <p>Kalau dipikir-pikir, kayaknya bukan hormon aja yang bikin begini. Soalnya, sesimpel apa pun hariku, ujung-ujungnya pengin cerita ke Lala lagi. 💗😸</p>
            <div class="letter-footer">
              <span>with a little bit of nervousness,</span>
              <strong>samuel, your ISD ♡</strong>
            </div>

            <span class="letter-stamp">FOR YOU</span>
          </div>

          <div class="button-group">
            <button class="primary-button" @click="nextStep">
              Tapi ada alasan lain... <span>→</span>
            </button>
            <button class="text-button" @click="previousStep">← Baca lagi nanti</button>
          </div>
        </template>

        <!-- PAGE 3: REASONS -->
        <template v-else-if="step === 2">
          <div class="section-label">💗 TOP SECRET REASONS</div>

          <h1 class="section-heading">
            Kenapa <span>kamu?</span>
          </h1>
          <p class="section-description">
            Tap kartu-kartu ini buat membuka sedikit apa yang aku rasakan.
          </p>

          <div class="reason-progress">
            <div class="reason-progress-copy">
              <span>LOVE POINTS</span>
              <span>{{ openedCards.length }} / {{ reasons.length }}</span>
            </div>
            <div class="reason-track">
              <div
                class="reason-fill"
                :style="{ width: `${(openedCards.length / reasons.length) * 100}%` }"
              ></div>
            </div>
          </div>

          <div class="reason-list">
            <button
              v-for="(reason, index) in reasons"
              :key="reason.title"
              class="reason-card"
              :class="{ opened: openedCards.includes(index) }"
              :aria-expanded="openedCards.includes(index)"
              @click="toggleCard(index)"
            >
              <span class="reason-emoji">
                {{ openedCards.includes(index) ? reason.emoji : '💌' }}
              </span>

              <span class="reason-copy">
                <strong>
                  {{ openedCards.includes(index) ? reason.title : `Secret #0${index + 1}` }}
                </strong>
                <span v-if="openedCards.includes(index)" class="reason-description">
                  {{ reason.description }}
                </span>
                <span v-else class="reason-hint">Tap to reveal ✨</span>
              </span>

              <span class="reason-toggle">
                {{ openedCards.includes(index) ? '♡' : '+' }}
              </span>
            </button>
          </div>

          <div v-if="allCardsOpened" class="all-open">
            <span>🎉</span>
            <p>Semua rahasia terbuka! Kamu hebat, detektif cinta.</p>
          </div>

          <div class="button-group">
            <button
              class="primary-button"
              :disabled="!allCardsOpened"
              @click="nextStep"
            >
              Last question, promise! <span>→</span>
            </button>
            <button class="text-button" @click="previousStep">← Kembali</button>
          </div>
        </template>

        <!-- PAGE 4: CONFESSION -->
        <template v-else>
          <div class="section-label">💌 THE FINAL QUESTION</div>

          <div class="final-illustration" aria-hidden="true">
            <div class="heart-orbit orbit-a"></div>
            <div class="heart-orbit orbit-b"></div>
            <div class="big-heart">💗</div>
            <span class="final-spark final-spark-a">✦</span>
            <span class="final-spark final-spark-b">✧</span>
            <span class="final-spark final-spark-c">♡</span>
          </div>

          <template v-if="!answer">
            <div class="final-copy">
              <span class="eyebrow">okay, deep breath...</span>
              <h1>
                Aku suka<br />
                <span>sama kamu.</span>
              </h1>
              <p>
                Bukan cuma suka diskon tanggal kembar, tapi beneran suka kamu.
                Jadi... boleh nggak aku kenal kamu lebih dekat? 🥹
              </p>
            </div>

            <div class="answer-card">
              <p class="answer-question">Your answer, please? 🫣</p>
              <button class="primary-button" @click="answer = 'yes'">
                MAU DONG! 💗
              </button>
              <button class="secondary-button" @click="answer = 'think'">
                Aku pikir-pikir dulu ya 🌷
              </button>
            </div>
            <button class="text-button" @click="previousStep">← Aku belum siap</button>
          </template>

          <template v-else-if="answer === 'yes'">
            <div class="result-card happy-result">
              <span class="result-emoji">🥹💗</span>
              <h1>YAYYYY!</h1>
              <p>
                Oke, sekarang aku boleh senyum-senyum sendiri dengan alasan
                yang valid. Makasih ya! Kita jalanin pelan-pelan bareng, ya?
              </p>
              <span class="result-note">NEW MEMORY UNLOCKED ♡</span>
            </div>
            <button class="primary-button" @click="restart">
              Ulangi dari awal ↻
            </button>
          </template>

          <template v-else>
            <div class="result-card gentle-result">
              <span class="result-emoji">🫶</span>
              <h1>It's okay!</h1>
              <p>
                Nggak usah buru-buru, kok. Aku senang bisa jujur sama kamu,
                dan kamu berhak punya waktu untuk memikirkan jawabannya.
              </p>
              <span class="result-note">NO PRESSURE, JUST HONESTY ♡</span>
            </div>
            <button class="primary-button" @click="restart">
              Kembali ke awal ↻
            </button>
          </template>
        </template>
      </section>
    </Transition>

    <footer class="cute-footer">
      <span>made with a tiny bit of courage & lots of </span>
      <span class="footer-heart">♥</span>
    </footer>
  </main>
</template>