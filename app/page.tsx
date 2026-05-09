"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Route, Coins, Users, Building2, RadioTower } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const roadmap = [
  {
    phase: "FASE 1",
    title: "Branding & Comunidade",
    text: "Construção da identidade pública, narrativa urbana, presença social e base inicial da comunidade DRIVR.",
  },
  {
    phase: "FASE 2",
    title: "Infraestrutura Web3",
    text: "Preparação técnica do ecossistema, arquitetura do token, contratos, documentação e canais oficiais.",
  },
  {
    phase: "FASE 3",
    title: "Expansão",
    text: "Crescimento da comunidade, parcerias estratégicas, ativações digitais e fortalecimento do treasury.",
  },
  {
    phase: "FASE 4",
    title: "Escala",
    text: "Evolução da governança, utilidades digitais e expansão do ecossistema para novos mercados urbanos.",
  },
];

const buildItems = [
  {
    icon: Coins,
    title: "Token $DRIVR",
    text: "Um ativo digital planejado para sustentar o ecossistema DRIVR, ainda em fase de desenvolvimento.",
  },
  {
    icon: Users,
    title: "Comunidade Urbana",
    text: "Uma comunidade para motoristas, builders, apoiadores e pessoas conectadas à economia da mobilidade.",
  },
  {
    icon: Shield,
    title: "Treasury",
    text: "Estrutura futura para apoiar desenvolvimento, operações, comunidade e expansão estratégica.",
  },
  {
    icon: RadioTower,
    title: "Governança Futura",
    text: "Caminho planejado para participação progressiva da comunidade nas decisões do ecossistema.",
  },
];

export default function DrivrLandingPage() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [walletAddress, setWalletAddress] = useState("");
const [status, setStatus] = useState("");

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,214,102,0.08),transparent_28%),linear-gradient(180deg,#050505_0%,#080808_45%,#020202_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute bottom-0 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-t-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.20),transparent_68%)] blur-2xl" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 shadow-[0_0_30px_rgba(212,175,55,0.18)]">
            <Image
  src="/logo.png"
  alt="DRIVR"
  width={36}
  height={36}
  className="object-contain"
/>
          </div>
          <div>
            <div className="text-lg font-black tracking-[0.24em] text-[#f5d56a]">DRIVR</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">Web3 Mobility</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-[#f5d56a]" href="#about">Sobre</a>
          <a className="transition hover:text-[#f5d56a]" href="#building">Construção</a>
          <a className="transition hover:text-[#f5d56a]" href="#roadmap">Roadmap</a>
          <a className="transition hover:text-[#f5d56a]" href="#token">Token</a>
        </nav>

        <a
          href="https://x.com/drivrtoken"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-[#d4af37]/40 px-5 py-2 text-sm font-semibold text-[#f5d56a] transition hover:bg-[#d4af37]/10 md:inline-flex"
        >
          @drivrtoken
        </a>
      </header>

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#f5d56a]">
            Building the urban Web3 layer
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-8xl lg:text-9xl">
            O ASFALTO <span className="block bg-gradient-to-r from-[#8a6b17] via-[#f5d56a] to-[#fff1a8] bg-clip-text text-transparent">É NOSSO.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-8 text-white/64 md:text-xl">
            Infraestrutura Web3 para mobilidade urbana e comunidade digital. DRIVR nasce para construir uma camada premium, pública e de longo prazo para a economia das ruas.
          </motion.p>

          <motion.div
  variants={fadeUp}
  className="mt-10 w-full max-w-xl rounded-[2rem] border border-[#d4af37]/20 bg-black/40 p-6 backdrop-blur-xl"
>
  <div className="mb-6">
    <div className="text-sm font-black uppercase tracking-[0.24em] text-[#f5d56a]">
      Early Access
    </div>

    <h3 className="mt-3 text-2xl font-black uppercase">
      Join the Movement
    </h3>

    <p className="mt-3 text-white/56">
      Entre na comunidade inicial da DRIVR e acompanhe a construção do ecossistema.
    </p>
  </div>

  <form
  className="space-y-4"
  onSubmit={async (e) => {
    e.preventDefault();

    setStatus("Enviando...");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        walletAddress,
      }),
    });

    if (res.ok) {
      setStatus("Cadastro realizado com sucesso.");
      setName("");
      setEmail("");
      setWalletAddress("");
    } else {
      setStatus("Erro ao cadastrar. Tente novamente.");
    }
  }}
>
    <input
      type="text"
      placeholder="Seu nome"
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-[#d4af37]/40"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      type="email"
      placeholder="Seu email"
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-[#d4af37]/40"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="text"
      placeholder="Wallet (opcional)"
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-[#d4af37]/40"
      value={walletAddress}
      onChange={(e) => setWalletAddress(e.target.value)}
    />

    <button
      type="submit"
      className="w-full rounded-xl bg-gradient-to-r from-[#b58a1e] via-[#f5d56a] to-[#fff1a8] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.01]"
    >
      Join the Movement
    </button>
    {status && (
  <p className="text-sm font-semibold text-[#f5d56a]">
    {status}
  </p>
)}
  </form>
</motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative mt-20 hidden h-[620px] lg:block"
        >
          <div className="absolute left-1/2 top-8 h-[560px] w-[300px] -translate-x-1/2 perspective-[900px]">
            <div className="absolute inset-x-0 bottom-0 mx-auto h-[560px] w-[220px] origin-bottom rotate-x-[62deg] overflow-hidden rounded-t-[120px] border border-[#d4af37]/20 bg-gradient-to-b from-[#d4af37]/20 via-[#16110a] to-[#020202] shadow-[0_0_70px_rgba(212,175,55,0.16)]">
              <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#fff1a8] via-[#d4af37] to-transparent" />
              <div className="absolute left-10 top-0 h-full w-px bg-[#d4af37]/22" />
              <div className="absolute right-10 top-0 h-full w-px bg-[#d4af37]/22" />
              <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex items-end justify-center gap-4 opacity-80">
            {[64, 132, 92, 180, 122, 220, 150, 96, 170].map((height, index) => (
              <div
                key={index}
                className="w-12 rounded-t-lg border border-white/10 bg-white/[0.035] shadow-[0_0_35px_rgba(212,175,55,0.08)]"
                style={{ height }}
              />
            ))}
          </div>

          <div className="absolute right-10 top-16 rounded-3xl border border-[#d4af37]/25 bg-black/60 p-5 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">Status</div>
            <div className="mt-2 text-lg font-black text-[#f5d56a]">Em desenvolvimento</div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">Sobre o DRIVR</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">Uma marca Web3 para a economia urbana.</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-lg leading-8 text-white/64 backdrop-blur-xl md:p-10">
            <p>
              DRIVR é um projeto em construção pública, criado para unir comunidade urbana, mobilidade e infraestrutura Web3 em uma narrativa de longo prazo. Antes de qualquer lançamento, o foco é construir legitimidade: identidade forte, canais oficiais, visão clara e uma comunidade que entende o valor de um ecossistema bem estruturado.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 via-white/[0.03] to-transparent p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">O problema</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">A mobilidade move cidades, mas ainda não tem uma camada digital própria.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/64">
              <p>
                A economia da mobilidade urbana ainda é marcada por centralização, taxas elevadas, dependência de plataformas fechadas e pouca participação das comunidades que realmente movimentam as ruas.
              </p>
              <p>
                DRIVR nasce para explorar uma alternativa: uma infraestrutura digital onde marca, comunidade, tokenização e governança futura possam operar de forma integrada, transparente e progressiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="building" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">O que estamos construindo</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">Um ecossistema, não uma aposta.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {buildItems.map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition hover:border-[#d4af37]/35 hover:bg-[#d4af37]/[0.06]"
            >
              <item.icon className="h-8 w-8 text-[#f5d56a]" />
              <h3 className="mt-6 text-xl font-black uppercase tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/56">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">Roadmap</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">Construção por fases.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/56">
            O roadmap da DRIVR prioriza base, infraestrutura, comunidade e escala antes de qualquer narrativa especulativa.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.phase}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              className="relative rounded-[2rem] border border-white/10 bg-black/50 p-7 backdrop-blur-xl"
            >
              <div className="absolute right-6 top-6 text-5xl font-black text-white/[0.04]">0{index + 1}</div>
              <div className="text-xs font-black uppercase tracking-[0.28em] text-[#f5d56a]">{item.phase}</div>
              <h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/56">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="token" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="rounded-[2.5rem] border border-[#d4af37]/25 bg-gradient-to-br from-[#d4af37]/12 via-white/[0.035] to-black p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">Token Info</p>
            <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">$DRIVR</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Informações iniciais do token planejado. A DRIVR ainda está em desenvolvimento e não possui lançamento ativo.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-10">
            <div className="space-y-5">
              {[
                ["Nome", "DRIVR"],
                ["Símbolo", "$DRIVR"],
                ["Rede planejada", "Polygon"],
                ["Status", "Em desenvolvimento"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-6 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <span className="text-sm uppercase tracking-[0.22em] text-white/40">{label}</span>
                  <span className="text-right text-lg font-black text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#d4af37]/25 bg-[#070707] p-8 text-center shadow-[0_0_90px_rgba(212,175,55,0.10)] md:p-14">
          <Building2 className="mx-auto h-10 w-10 text-[#f5d56a]" />
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black uppercase tracking-[-0.05em] md:text-7xl">
            A estrada está sendo construída em público.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/58">
            Acompanhe os próximos marcos, atualizações de branding, canais oficiais e evolução do ecossistema DRIVR.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://x.com/drivrtoken"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#f5d56a]"
            >
              X / Twitter
            </a>
            <button className="cursor-not-allowed rounded-full border border-white/12 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white/38">
              Telegram — Coming Soon
            </button>
          </div>
        </div>
      </section>
<section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
  <div className="rounded-[2.5rem] border border-[#d4af37]/20 bg-white/[0.03] p-10 backdrop-blur-xl">
    
    <div className="mb-6 text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">
      Founder
    </div>

    <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
      
      <div>
        <h2 className="text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
          Building DRIVR in public.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          DRIVR está sendo construído publicamente por Yury Gil,
          com foco em infraestrutura Web3, mobilidade urbana
          e ecossistemas digitais de longo prazo.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8">
        <div className="text-2xl font-black uppercase">
          Yury Gil
        </div>

        <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[#f5d56a]">
          Blockchain & Full Stack Developer
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://x.com/drivrtoken"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d4af37]/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f5d56a] transition hover:bg-[#d4af37]/10"
          >
            X / Twitter
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70 transition hover:border-white/30"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/38 md:flex-row md:items-center">
          <div className="font-bold uppercase tracking-[0.22em]">© 2026 DRIVR. Building in public.</div>
          <div className="max-w-2xl text-right leading-6">
            DRIVR está em desenvolvimento. Nenhuma informação nesta página constitui recomendação financeira, oferta de investimento ou promessa de retorno.
          </div>
        </div>
      </footer>
    </main>
  );
}
