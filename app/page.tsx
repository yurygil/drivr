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
    title: "Comunidade & Identidade",
    text: "Construção da base da DRIVR, fortalecimento da narrativa urbana e crescimento da comunidade inicial.",
  },
  {
    phase: "FASE 2",
    title: "Infraestrutura Digital",
    text: "Desenvolvimento da estrutura blockchain, arquitetura do ecossistema e documentação oficial do projeto.",
  },
  {
    phase: "FASE 3",
    title: "Participação & Benefícios",
    text: "Exploração de futuras possibilidades de integração, reconhecimento digital e benefícios voltados para trabalhadores urbanos.",
  },
  {
    phase: "FASE 4",
    title: "Expansão do Ecossistema",
    text: "Crescimento da DRIVR para novas comunidades, parceiros e possibilidades dentro da economia urbana digital.",
  },
];

const buildItems = [
  {
    icon: Coins,
    title: "Token $DRIVR",
    text: "Uma moeda digital pensada para conectar trabalhadores urbanos ao ecossistema DRIVR de forma transparente e progressiva.",
  },
  {
    icon: Users,
    title: "Comunidade das Ruas",
    text: "Motoristas, entregadores, motoboys, ciclistas e pessoas que vivem a rotina urbana todos os dias.",
  },
  {
    icon: Shield,
    title: "Participação Digital",
    text: "Um caminho para criar novas formas de reconhecimento, benefícios e pertencimento dentro da economia urbana digital.",
  },
  {
    icon: RadioTower,
    title: "Futuro Aberto",
    text: "A DRIVR está sendo construída em público, evoluindo junto com sua comunidade desde os primeiros passos.",
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
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
  Economia Urbana Digital
</div>
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
            Construindo a economia digital das ruas
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-8xl lg:text-9xl">
            O ASFALTO <span className="block bg-gradient-to-r from-[#8a6b17] via-[#f5d56a] to-[#fff1a8] bg-clip-text text-transparent">É NOSSO.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-8 text-white/64 md:text-xl">
            A DRIVR é um projeto brasileiro criado para conectar motoristas, entregadores e trabalhadores urbanos à nova economia digital através da tecnologia blockchain.

Quem move as cidades também merece participar do futuro que ajuda a construir.
          </motion.p>

          <motion.div
  variants={fadeUp}
  className="mt-10 w-full max-w-xl rounded-[2rem] border border-[#d4af37]/20 bg-black/40 p-6 backdrop-blur-xl"
>
  <div className="mb-6">
    <div className="text-sm font-black uppercase tracking-[0.24em] text-[#f5d56a]">
      Comunidade Inicial
    </div>

    <h3 className="mt-3 text-2xl font-black uppercase">
      Entre para a DRIVR
    </h3>

    <p className="mt-3 text-white/56">
      Participe do início da DRIVR e acompanhe a construção de uma nova economia digital voltada para quem move as cidades todos os dias.
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
      Entre para a DRIVR
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
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">Uma nova economia digital para quem move as ruas.</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-lg leading-8 text-white/64 backdrop-blur-xl md:p-10">
            <p>
              A DRIVR nasce com a visão de criar uma economia digital conectada aos trabalhadores que movimentam as cidades todos os dias.

Motoristas de aplicativo, motoboys, entregadores e ciclistas urbanos fazem parte da infraestrutura real das ruas, mas quase nunca participam da construção digital desse futuro.

Nosso objetivo é construir uma comunidade forte, transparente e de longo prazo utilizando tecnologia blockchain como base.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 via-white/[0.03] to-transparent p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">O problema</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">As cidades nunca param. Mas quem move elas quase nunca é reconhecido.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/64">
              <p>
                Milhões de trabalhadores passam horas nas ruas mantendo aplicativos, entregas e deslocamentos funcionando todos os dias.
                Mesmo sustentando parte da economia urbana, continuam fora da construção digital desse futuro.
              </p>
              <p>
                A DRIVR nasce para construir uma infraestrutura digital onde comunidade, reconhecimento e participação possam crescer juntos através da tecnologia blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="building" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">
  O que estamos construindo
</p>
<h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
  Uma economia digital para quem move as cidades.
</h2>
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
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
  <div className="rounded-[2.75rem] border border-[#d4af37]/25 bg-gradient-to-br from-[#d4af37]/10 via-white/[0.03] to-black p-8 shadow-[0_0_90px_rgba(212,175,55,0.08)] md:p-14">
    <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">
      Manifesto
    </p>

    <h2 className="mt-6 max-w-5xl text-4xl font-black uppercase tracking-[-0.05em] md:text-7xl">
      Quem move as cidades nunca deveria ficar de fora do futuro delas.
    </h2>

    <div className="mt-8 grid gap-8 text-lg leading-8 text-white/62 lg:grid-cols-3">
      <p>
        Todos os dias, milhões de trabalhadores passam horas nas ruas mantendo aplicativos,
        entregas e deslocamentos funcionando.
      </p>

      <p>
        Mesmo movimentando parte da economia urbana, quase nunca participam da construção
        digital desse futuro.
      </p>

      <p>
        A DRIVR nasce para reconhecer, conectar e fortalecer quem realmente mantém as cidades em movimento.
      </p>
    </div>
  </div>
</section>

      <section id="roadmap" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">Roadmap</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">Construindo a DRIVR passo a passo.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/56">
            A DRIVR está sendo construída com foco em comunidade, infraestrutura digital e crescimento sustentável antes de qualquer narrativa especulativa.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5d56a]">Token DRIVR</p>
            <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">$DRIVR</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              O $DRIVR será a moeda digital do ecossistema DRIVR, criada para conectar comunidade, participação e futuras possibilidades dentro da economia urbana digital.
              O projeto ainda está em desenvolvimento e não possui lançamento ativo no momento.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-10">
            <div className="space-y-5">
              {[
  ["Nome", "DRIVR"],
  ["Símbolo", "$DRIVR"],
  ["Blockchain", "Polygon"],
  ["Status", "Construção inicial"],
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
            O futuro das ruas também pertence a quem trabalha nelas.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/58">
            A DRIVR está sendo construída em público ao lado de motoristas, entregadores e trabalhadores urbanos que movimentam as cidades todos os dias.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://x.com/drivrtoken"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#f5d56a]"
            >
              Acompanhar projeto
            </a>
            <button className="cursor-not-allowed rounded-full border border-white/12 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white/38">
              Comunidade — Em breve
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
          Construindo a DRIVR ao lado de quem move as cidades.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          A DRIVR está sendo construída publicamente por Yury Gil com a visão de criar uma economia digital mais conectada aos trabalhadores urbanos.
          Motoristas, entregadores e profissionais das ruas fazem parte da infraestrutura real das cidades — e merecem participar do futuro digital delas.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8">
        <div className="text-2xl font-black uppercase">
          Yury Gil
        </div>

        <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[#f5d56a]">
          Founder • Blockchain & Full Stack Developer
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
          <div className="font-bold uppercase tracking-[0.22em]">© 2026 DRIVR. Construído em público.</div>
          <div className="max-w-2xl text-right leading-6">
            DRIVR está em desenvolvimento. Nenhuma informação nesta página constitui recomendação financeira, oferta de investimento ou promessa de retorno.
          </div>
        </div>
      </footer>
    </main>
  );
}
